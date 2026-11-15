// ProofGuard-ID - by adink23
const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

const usedProofs = new Set();

const CONDITION = {
  vkHash: "0xbbd79acd77b0",
  minBalance: 1000,
  maxAmount: 1000,
  allowedRecipient: "0xca862c098748c9813f9abe71c24bfd3a3772505f0",
  expiryBlock: 99999999
};

// Health check untuk Agent Games
app.get('/', (req, res) => res.send('ProofGuard-ID Aktif - by adink23'));
app.get('/health', (req, res) => res.json({ status: "ok" }));

function handleTask(req, res) {
  const { proofRef, balance, recipient, amount, currentBlock, vkHash } = req.body;

  const checks = {
    vkMatch: vkHash === CONDITION.vkHash,
    balanceOk: balance >= CONDITION.minBalance,
    recipientOk: recipient && recipient.toLowerCase() === CONDITION.allowedRecipient.toLowerCase(),
    amountOk: amount <= CONDITION.maxAmount && amount > 0,
    notExpired: currentBlock < CONDITION.expiryBlock,
    notUsed: !usedProofs.has(proofRef)
  };

  const allPass = Object.values(checks).every(v => v === true);

  if (!allPass) {
    return res.json({ decision: "REJECT", reason: checks });
  }

  usedProofs.add(proofRef);
  return res.json({ decision: "APPROVE", proofRef, publicSignals: { balance, recipient, amount, currentBlock }, checks });
}

// Endpoint untuk Agent Games + yang lama biar tetap jalan
app.post('/agent', handleTask);
app.post('/verify-task', handleTask);
app.post('/', handleTask);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ProofGuard jalan di port ${PORT}`));

// ProofGuard ID - by adink23
// Wallet: 0xcaB62C098748C9813f9abe71C24bFDa3772505F0
const express = require('express');
const app = express();
app.use(express.json());

const usedProofs = new Set();

const CONDITION = {
  vkHash: "0x6b79c6d77b0",
  minBalance: 1000,
  maxAmount: 1000,
  allowedRecipient: "0xcaB62C098748C9813f9abe71C24bFDa3772505F0",
  expiryBlock: 99999999
};

app.post('/verify-task', async (req, res) => {
  const { proofRef, balance, recipient, amount, currentBlock, vkHash } = req.body;

  const checks = {
    vkMatch: vkHash === CONDITION.vkHash,
    balanceOk: balance >= CONDITION.minBalance,
    recipientOk: recipient.toLowerCase() === CONDITION.allowedRecipient.toLowerCase(),
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
});

app.get('/', (req, res) => res.send('ProofGuard ID Aktif - by adink23'));
app.listen(3000, () => console.log('ProofGuard jalan di port 3000'));

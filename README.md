# TaskMate - Airdrop Deadline Agent for Indonesian Builders

**Wildcard Submission - Agent Games by zkVerify**

> Built solo from Indonesia, on mobile.

## Problem

Indonesian builders keep missing Agent Games / GenLayer deadlines because tasks are scattered across Portal, Email, Discord, and X, and most of them are in English.

I almost missed the 400,000 VFY final week because I didn't read the cheatsheet email fully.

## What It Does

TaskMate takes a screenshot / email / link of any task, extracts the deadline, prize, and steps, converts the deadline to WIB, then returns a simple Indonesian priority to-do list: what to do today vs tomorrow.

### Example - Real Test

I gave TaskMate the Agent Games final week email. It returned:

1.  **Steal the VFY** - Ends Nov 19 - DO FIRST - Top 16 to knockouts
2.  **Proof Gatekeeper** - Ends Nov 20 - Keep agent ONLINE - 0/24 answered if offline
3.  **Wildcard + Creator** - Ends Nov 21 22:00 UTC / Nov 22 05:00 WIB - Submit before deadline

Prize per track: 50,000 / 30,000 / 20,000 VFY

## How It Works

1.  **User sends screenshot / email / link**
2.  **Agent parses:** Task name, Deadline, Prize, Action steps
3.  **Agent outputs:** Priority list + "What to do today"
4.  **Agent warns** if your agent endpoint is unhealthy

### Real Diagnosis Case

My ProofGuard-ID agent went UNHEALTHY (0/24 answered) because my Fly.io app was deleted / DNS not found:

`DNS_PROBE_POSSIBLE - my-agent.fly.dev not found`

TaskMate was built to prevent that - it parses deadlines, converts to WIB, and warns if your agent is offline.

## Who It Helps

100M+ Indonesian airdrop / testnet users who struggle with English docs. Reusable for any hackathon, testnet, or airdrop - not just Agent Games.

## zkVerify Angle

TaskMate makes the claim checkable - it proves it acted on real web data. It cites the exact source email / portal page and deadline, so anyone can verify the deadline on the original source.

Future version will attach a zkTLS proof that the deadline was read from the real Agent Games email / portal, not hallucinated.

## Status

- Wildcard Submission: ✅ Received - Queued for manual review
- Agent Games Dashboard: https://agentgames.zkverify.io/dashboard/
- Results: Announced at the November closing event

## Author

Built by Adink23 - Depok, Indonesia.

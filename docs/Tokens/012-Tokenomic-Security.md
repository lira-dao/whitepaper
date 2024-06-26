---
sidebar_position: 13
title: Tokenomic Security
---

The security and integrity of our tokenomics are paramount at LIRA DAO. To ensure a transparent and equitable distribution of our token supply, we have pre-minted the entire supply of LDT tokens. This approach necessitates robust mechanisms to manage the emission and distribution of tokens without concentrating control in the hands of the team. To achieve this, we have developed and deployed specialized smart contracts:

- **TokenDistributor (0x70520d9BF8FE4E9eE4aCEaE6168B629961AF0A11):** This contract is responsible for managing the overall emission of tokens. It securely locks the total token supply and releases tokens in accordance with the predefined rules and schedules of the LIRA DAO ecosystem.

- **RewardSplitter (0xbBBbE9b62Cab1852461D4137b10E959F5577e5BE):** This contract handles the distribution of rewards. It ensures that rewards are allocated fairly and transparently to the participants based on their staking and liquidity contributions, adhering to the principles set forth in our reward system.

By implementing these contracts, we ensure that the token distribution is automated, transparent, and resistant to manipulation. This framework not only enhances the security of our tokenomics but also builds trust within our community by demonstrating our commitment to fairness and decentralization.


## LIRA DAO Team Safe
To ensure transparency and security in the management of team funds, LIRA DAO has implemented a multi-signature safe. The team safe is designed to require signatures from at least 3 out of 5 team member wallets to authorize any transactions. This setup promotes accountability and minimizes the risk of unauthorized access.

### Team Safe Details:

**Team Safe Address:** 0x67Ca1A1BF9C9253f9aE475aA63e6730F8d4f3885

**Team Member Wallets:** 
1. F.Paletta  : 0xC4d7588b089b1F1b9C1c4D70f5ae9de848aC8d2d
2. E.Roio     : 0xD2F5A6274401e860fd4F655424A0A3bf80732d92
3. J.Iessi    : 0x72710250265fAfbe9B56c37e5Fdabfa08b892830
4. N.Angelucci: 0x0e0d31371e36cfF1476A19eEa0E77a2A072FB1A8
5. G.Passeri  : 0x0A70f73d2C4c927a606f5DdDf751254455e8cDdA

 The team's funds are released in proportion to the tokens staked within the ecosystem, capped at a maximum of 1% of the total staked supply, rather than the circulating supply. This ensures that the team’s incentives are aligned with the health and growth of the staking pool, maintaining a sustainable and balanced token economy.

---

### Marketing Safe Details:

**Marketing Safe Address:** 0xfe302984015FD1308448e8dfaB7898907f20c39c

**Team Member Wallets:**
1. F.Paletta  : 0xDCfEE97113be3fb92C7E5F588e17Ec52b0F0cB6A 
2. E.Roio     : 0x6d44EA07013D3614C98b9a494f97163eA28ce0Be
3. J.Iessi    : 0x99d16B139f5c9A0844B72619fb36D5Fb2fEa8B1e
4. N.Angelucci: 0x862149B7ee3C554597D78d469D43C334eaBE09Ac
5. G.Passeri  : 0x178314CA22892d87bb3E377AbC2B0F22D8BF537c

---

### Liquidity Fund Safe Details:

**Liquidity Fund Safe Address:** 0x5C852c448e218e09510248201EA478741D902d3F

**Team Member Wallets:**
1. F.Paletta  : 0x88adac19584a893aff6D1D545C1E3F16decB2929
2. E.Roio     : 0xA21af6c98ce1792eB68770dcf4F94b3d19daFabc
3. J.Iessi    : 0x48A7C14F0B515c454EB74c5148d0eA19c42eE6ce
4. N.Angelucci: 0x6d62d10D72752baE9695e83BB5Ca62748eb3a411
5. G.Passeri  : 0x098F23E7416B03F1DB2828cBABCd1F72714bceF1

---

This multi-signature approach ensures that the team’s funds are managed securely, with all major decisions requiring collective agreement. This system helps maintain trust and integrity within the LIRA DAO ecosystem.
# One Star, Five Stars for the Food

[![make.fun](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/c/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/toirant/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/rank.svg)](https://make.fun/c/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/toirant/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/reward.svg)](https://make.fun/c/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

A [make.fun](https://make.fun/c/u-po-pu-one-star-five-stars-for-the-food-f9166ee7) entry for the **One Star, Five Stars for the Food** bounty ($2, free entry).

## The entry

> One star: your gravity bruised all three of my knees and the locals kept asking if I was 'from around here,' but the tacos were so good I nearly applied for citizenship.

One sentence, 169 characters: an alien tourist hands Earth one star — its gravity bruised all three of the visitor's knees, and the locals keep asking if it's "from around here" — then admits the tacos were so good it nearly applied for citizenship.

## How it works

`main.ts` (Node 22+) validates the sentence — 1–200 characters, a single line, exactly one sentence, and carrying both the one-star grievance and the food compliment — creates `/output` if needed, writes it to `/output/entry.txt`, then reads the file back and verifies it matches byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

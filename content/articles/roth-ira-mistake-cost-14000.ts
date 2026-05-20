import { Article } from "@/lib/articles";

const article: Article = {
  slug: "roth-ira-mistake-cost-14000",
  title: "The Roth IRA Mistake That Cost Me $14,000 in Future Returns",
  date: "2025-05-20",
  category: "Investing",
  excerpt:
    "I did everything I was supposed to do — opened the account, funded it, picked a good fund. Then I made one small mistake that quietly ate four years of compounding. Don't do what I did.",
  image: "/images/articles/laptop-stocks.jpg",
  readTime: "7 min read",
  body: `
For four years between 2016 and 2020, I contributed faithfully to a Roth IRA at Charles Schwab. I would deposit $300 a month, every month, like the responsible adult I was trying to become. I felt good about myself every time the transfer went through.

In early 2021, I logged in to see how the account was doing.

The balance was $14,407.

I had contributed $14,400 over four years.

The growth — across four years of contributions in one of the strongest bull markets in modern history — was seven dollars.

I want to be honest about how I felt looking at that screen. I felt like I had been pranked by something I didn't understand. The S&P 500 had been up roughly 65% over that same period. My account, theoretically tracking the same kind of market, had earned $7.

It took me three days to figure out what had gone wrong. The mistake was so dumb I almost don't want to admit it. But it's the most common mistake I see other people making, so I'm going to tell you anyway.

## What I Did Wrong

I had opened the Roth IRA. I had set up the automatic transfer. The money was hitting the account every month, exactly as planned.

I had not bought anything with it.

For four full years, $14,400 of contributions had been sitting in the **cash settlement portion** of the IRA, earning approximately 0.01% interest. The account was open. The money was in. But the money wasn't invested. It was just sitting in the brokerage's version of a checking account, the way it would have been if I'd left it in a regular savings account at my bank.

I had assumed — completely incorrectly — that "putting money into a Roth IRA" automatically meant "buying investments." It does not. The contribution to the account and the purchase of an investment are two separate steps.

## Why This Mistake Happens So Often

Brokerages do not, generally, make this clear to new investors. The flow goes like this:

1. You open the Roth IRA. You feel like you're doing something serious.
2. You set up the contribution from your bank. Easy.
3. The money arrives in the account. The dashboard might say something like "Cash Available: $300."
4. You look at the dashboard and think, well, the money is here, I have done the thing.

The dashboard does not say "WARNING: This money is not invested. Click here to actually invest it." It sits patiently in cash, waiting for you to make the second decision — buying the actual fund or stock — and the brokerage is not in a rush to remind you.

I am not the only one this has happened to. I've talked to maybe a dozen people who made the same mistake, including a friend of mine who is a CPA. The CPA caught hers after about six months. Mine ran for four years.

## The Math of What It Cost

Let me put numbers on the cost, because the abstract version of this story doesn't really land.

If I had invested those $14,400 in contributions in a basic S&P 500 index fund as soon as each $300 arrived, the account would have been worth approximately $21,200 by early 2021 — based on actual S&P 500 returns over that period.

Instead, it was worth $14,407.

The opportunity cost was about $6,800 in immediate gains.

But that's not the full cost. The bigger cost is what those $6,800 would have continued compounding into over the next thirty-five years of my working life. At an average 7% real return, $6,800 today becomes about $14,000 in today's-dollars value in thirty-five years. That's the part that genuinely hurt — not the $6,800 I lost, but the lifetime compounding I lost on it.

## What the Fix Looks Like

Once I figured out what had gone wrong, the fix took me about ten minutes.

I logged into Schwab. I went to the trade tab. I bought $14,000 worth of SCHB, which is Schwab's broad-market U.S. equity ETF — basically the same kind of fund as Vanguard's VTI. I left a small cash buffer in case of fees.

Then I went into account settings and set up **automatic investing.** This is the critical step. Schwab calls it "Automatic Investment Plan." Fidelity calls it "Automatic Investments." Vanguard calls it "Automatic Investments" too. Whatever it's called at your brokerage, find it and turn it on.

What automatic investing does is take the second step out of your hands entirely. When new money arrives in the account from your monthly transfer, the brokerage automatically uses it to buy the fund you've selected. You no longer have to remember to log in and manually trade.

This is the difference between an investing system that depends on you doing two things every month and an investing system that runs by itself.

## The Other Mistakes I See

While I'm confessing, let me list a few related mistakes I've seen in friends' Roth IRAs since I started paying attention.

One: contributing to the Roth IRA, then buying a money market fund inside it. Money market funds are basically cash. They earn maybe 4-5% in a high interest rate environment, which is fine, but they are not equity exposure. Over thirty years, equity beats cash by a substantial margin. If you're going to hold cash in your Roth, you might as well hold it in a savings account.

Two: contributing to the Roth IRA, then buying a single stock — usually whatever the person had been hearing about, sometimes a meme stock, sometimes their employer. Tesla, GameStop, Nvidia, AMC, take your pick. The Roth IRA is the worst possible place to make a concentrated bet, because if it goes wrong, you cannot tax-loss harvest the way you can in a normal brokerage account.

Three: contributing to the Roth IRA, then buying a complicated three-fund portfolio they read about on a forum. This is not actually a mistake — three-fund portfolios are fine. But the optimization here is small, and for most early-career investors, a single broad-market ETF does the same job with one less thing to maintain.

## What I'd Tell My 32-Year-Old Self

If I could go back to 2016 and grab my 32-year-old self by the shoulders, I would say one sentence.

"Open the Roth IRA. Set up automatic contributions. Then, on the same day, set up automatic investing into a broad-market index fund. Then close the tab and don't think about it for a year."

That third step is the one that, for me, was missing. The automatic contribution was solving half the problem. The automatic investing was solving the other half. I had only done one and assumed I had done both.

The $14,000 I lost to that gap was, in retrospect, the most expensive piece of personal finance I've ever paid for. The good news is that you can fix it for free, in ten minutes, today. The brokerages all have the automatic investing feature now. Most of them have it turned off by default.

Don't make my mistake. Set the second step before you walk away from the screen.
  `.trim(),
};

export default article;

import { Article } from "@/lib/articles";

const article: Article = {
  slug: "investing-50-a-week-from-zero",
  title: "How I Started Investing $50 a Week When I Had $0 in Savings",
  date: "2025-05-13",
  category: "Investing",
  excerpt:
    "Every personal finance article tells you to invest. They rarely explain how to start when you have nothing. Here is exactly what I did when I was 30 with $147 to my name.",
  image: "/images/articles/coin-jar.jpg",
  readTime: "8 min read",
  body: `
The Sunday I opened my first brokerage account, I had $147.83 in my checking account, a $612 credit card balance, and forty-eight hours until my next paycheck would land. By any reasonable measure, I had no business opening a brokerage account.

I did it anyway. I funded it with $50, which I genuinely could not afford to lose, and I bought one share of a Vanguard ETF called VTI for $211 (the price of one share — yes, my $50 only bought fractional). It felt slightly ridiculous and slightly thrilling.

That was March 2021. Four years later that one $50 has compounded to something genuinely meaningful, in a way I would not have believed at the time. I want to walk you through exactly how I started, because most articles about investing assume you already have a savings cushion to invest from. I didn't.

## What I Got Wrong For Years

The story I had been telling myself before that Sunday was straightforward and, I now think, mostly wrong. I told myself that I shouldn't invest until I had paid off all my debt. Then I told myself I shouldn't invest until I had a real emergency fund. Then I told myself I shouldn't invest until I was "set up properly," whatever that meant.

What this story missed is that **time in the market matters more than almost any other variable when you're starting young.** A $50 contribution at 30 will, on average, be worth more in retirement than a $200 contribution at 50. The early dollars compound for longer.

By waiting until I was "ready," I was throwing away the most valuable years of compounding I would ever have. The math of this is so dramatic that even small early contributions vastly outperform large late ones.

## The Account I Opened

I opened a Roth IRA at Fidelity. I want to be specific here because the choice mattered.

A **Roth IRA** is a retirement account that lets you contribute up to $7,000 per year (2024 limit) of after-tax money. The growth and the withdrawals in retirement are tax-free. For a 30-year-old in a relatively low tax bracket, the Roth structure is almost always better than a traditional IRA, because you're paying tax on the contribution at a rate that's lower than what you'll likely pay in retirement.

I picked **Fidelity** because they had no minimums, no maintenance fees, and they let me buy fractional shares. Charles Schwab and Vanguard offer similar accounts. I would avoid Robinhood for this purpose — it's fine for casual investing but the user experience nudges people toward day trading and gimmicks, which is the opposite of what a Roth IRA is for.

## What I Bought

This is the part I want to be careful about. I bought a single ETF and never deviated.

The ETF was **VTI** — Vanguard Total Stock Market. It holds roughly 4,000 U.S. companies, weighted by market cap, with an expense ratio of 0.03%. That's three cents per year per $100 invested, which is essentially free.

Why VTI specifically? Three reasons. First, it's broad — owning 4,000 companies removes most of the risk of any single company tanking. Second, it's cheap — that 0.03% expense ratio is the lowest tier in the industry. Third, it has a thirty-year track record and a clear methodology I understood.

What I did not buy:
- Individual stocks. I have no edge over institutional investors and I know it.
- Crypto. Not in a retirement account, not from $50 a week.
- Theme ETFs ("AI stocks," "clean energy," etc.). The fees are higher and the diversification is worse.
- Anything anyone on TikTok was telling me to buy.

## The Automation

The thing that made this actually work, more than the account or the fund, was that I automated it.

Every Friday, $50 transferred automatically from my checking account to my Roth IRA. The transfer happened at 9 AM, while I was teaching. By the time I'd checked my account in the afternoon, the money was already gone. There was no decision to make, no week where I felt tight and "skipped" the contribution, no negotiation with myself.

Each Saturday morning, Fidelity automatically used that $50 to buy fractional shares of VTI. I didn't have to log in. I didn't have to think about price. I didn't try to time the market.

This automation is, in my honest opinion, the single most important thing in starting to invest. Without it, the contribution depends on willpower. With it, the contribution becomes infrastructure.

## The First Year

In the first year, I contributed $50 a week for 52 weeks. That's $2,600.

The market did okay that year — not great, not terrible. By the end of December 2021, my account balance was $2,890. I had earned roughly $290 in growth on contributions that averaged half a year of being in the market. About 11% return on the invested amount.

This is not a humble brag. The first year was, statistically, the least interesting year. The math really starts working in years three, four, five.

## The Fourth Year

It's now May 2025. I've been contributing $50 a week for 218 weeks, which is $10,900 in actual deposits. I have also, in two of those years, hit a small annual bonus that I added on top — another $2,400 total.

So my contributions over four years are about $13,300.

My current account balance is $19,840.

The $6,540 difference is, essentially, free money. It came from the market doing what the market does over a multi-year horizon — going up unevenly, sometimes terrifyingly down, but on average up over enough time.

If I project this forward at the same modest 7% real return — a number that is roughly the long-run historical average for the U.S. stock market after inflation — and I keep contributing $50 a week until I'm 65, the projected balance is somewhere around $410,000 in today's money. That's not a guarantee. That's an estimate based on history.

I started with $50 I genuinely could not afford to lose. The math suggests that decision will be worth around $400,000 over my lifetime.

## What I'd Tell Anyone Starting Now

If you have any income at all, and you can carve out even $25 a week, open a Roth IRA today. Today, not next year, not after you've paid off the credit card, not after the perfect setup. The compounding starts when the money lands, and every year you wait is a year you'll never get back.

Pick one broad-market ETF — VTI, VOO, or SCHB are all fine. Set up an automatic transfer. Set up automatic buying. Then ignore the account for a year.

This will be the most boring investment strategy you have ever heard of, and over thirty years it will, on average, outperform almost every more exciting strategy you might try.

The interesting part of investing is not what you buy. It's how long you hold it, and how consistently you keep adding. The rest is mostly marketing.
  `.trim(),
};

export default article;

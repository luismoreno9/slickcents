import { Article } from "@/lib/articles";

const article: Article = {
  slug: "side-hustle-taxes-1900-surprise",
  title: "The $1,900 Tax Bill My Side Hustle Handed Me in April",
  date: "2026-05-22",
  category: "Side Hustles",
  excerpt:
    "I made $11,300 freelancing on the side and spent almost all of it. Then April came, the IRS wanted $1,900, and I learned what self-employment tax truly is.",
  image: "/images/articles/side-hustle-taxes.jpg",
  readTime: "8 min read",
  body: `
The first year my side income crossed into real money, I spent almost all of it. I made $11,300 writing and editing for two small companies, and by the time I filed my taxes that money was mostly gone — some into a trip, some into a couch, most into the slow leak of just living.

Then my tax software asked me to enter my 1099 income, and the refund number I'd been quietly counting on flipped to a number I owed. $1,900.

I read it three times. I genuinely thought it was a glitch.

## Nobody Withholds Anything for You

Here's the thing I didn't understand, and the thing that catches almost everyone the first time. When you work a normal job, taxes come out of every paycheck before you ever see the money. Federal, state, Social Security, Medicare — all of it skimmed off the top automatically. By April you've usually overpaid, which is why a refund feels like a gift instead of what it is, which is your own money coming back.

Side hustle income doesn't work that way. When a company pays a freelancer or contractor, they hand over the full amount and report it on a 1099. No withholding. No skimming. The whole responsibility for the tax sits with you, and the IRS very much expects you to have set it aside.

I had not set anything aside. I had set aside a couch.

## The Part That Actually Stung: Self-Employment Tax

The $1,900 wasn't just income tax. A big chunk of it was something called self-employment tax, and it's the piece that ambushes people.

When you're a W-2 employee, you pay half of your Social Security and Medicare and your employer quietly pays the other half. You never feel the second half. When you're self-employed, you are both the worker and the employer, so you pay both halves yourself. That's roughly 15.3% on your net side-hustle profit, on top of regular income tax.

Anyone who clears $400 of self-employment profit in a year owes this. Four hundred dollars. Not four thousand. I'd assumed there was some comfortable threshold where the small stuff didn't count. There isn't.

So on my $11,300, the self-employment tax alone ran past $1,500 before income tax even entered the conversation. That math is what turned a fun side project into an April panic.

## Where I Was Leaving Money on the Table

The flip side of paying business taxes is that you also get to deduct business expenses — and I'd deducted none of them, because I didn't know I could.

I'd bought a laptop that year, mostly for the freelance work. I paid for a writing software subscription, a stock-photo account, and a chunk of my home internet that the work clearly depended on. All of that lowers the profit you actually get taxed on. Profit, not revenue, is what the self-employment tax hits.

The home office deduction is the one people get wrong most, so I'll be precise about it. To claim it, the space has to be used regularly and exclusively for the business. The corner of the kitchen table where I also eat cereal doesn't count. A spare room I'd turned into an actual office, used for nothing else, would have — a percentage of rent, utilities, and internet based on its square footage.

I didn't have that room. But I did have legitimate equipment and subscription costs I could have tracked, and I'd thrown the receipts away. That's the admission: I left real deductions on the table out of pure laziness, and it cost me more than the tax I was angry about.

## What I Do Now

The fix turned out to be embarrassingly simple, which is the most annoying kind of fix.

I opened a second checking account labeled "taxes." Every time a client pays me, I move 30% of it into that account the same day and forget it exists. Thirty percent is more than I'll usually owe, which means the leftover at tax time feels like the refund I used to chase. Same trick my old employer used on me, except now I'm the one doing the withholding.

I also started paying quarterly estimated taxes. The IRS expects you to pay throughout the year, not all at once in April, and if you owe enough they'll add a penalty for waiting. Four payments a year, due in April, June, September, and January. I set calendar reminders so the dates stop sneaking up on me.

And I keep every receipt that touches the business now, in a single folder in my email. Laptop, software, the portion of my phone bill tied to client calls, mileage when I drive to meet someone. None of it is glamorous. All of it lowers the number I get taxed on.

## The Number That Reframed It

The year after the $1,900 surprise, I made a little more — around $13,000 — and owed about the same in total. But it didn't hurt, because the money was already sitting in the tax account waiting. I filed, paid, and barely noticed.

The side income hadn't changed much. What changed was that I stopped pretending the money was entirely mine the moment it landed.

If you're starting to make real money on the side, do the boring thing before you do the fun thing. Open the second account this week. Move 30% of your next payment into it. Keep the receipts. The IRS is going to want its share whether you planned for it or not, and the only question that matters is whether you'll have the money sitting there when they ask, or whether you'll be reading a number on a screen three times wondering if it's a glitch.

It wasn't a glitch. It was a couch.
  `.trim(),
};

export default article;

import { Article } from "@/lib/articles";

const article: Article = {
  slug: "fire-number-isnt-what-you-think",
  title: "Your FIRE Number Isn't What You Think It Is",
  date: "2025-07-30",
  category: "FIRE",
  excerpt:
    "Everyone in the FIRE community talks about \"the number\" — the amount you need to retire. The standard formula is wrong for almost everyone. Here is the version that accounts for what the spreadsheets leave out.",
  image: "/images/articles/mountain-2.jpg",
  readTime: "9 min read",
  body: `
The first time I ran my own FIRE number was on a Sunday afternoon in 2021, with a coffee at my kitchen table and the standard 25x calculator from a popular FIRE blog open in my browser. The rule, as I understood it, was simple. Take your annual expenses. Multiply by 25. That's your FIRE number. When your investments equal that number, you have enough to retire.

My annual expenses at the time were about $36,000. Multiplied by 25 gave me a target of $900,000. I sat with this number for a while. It felt simultaneously enormous and manageable — far away, but mathematically achievable on my teaching salary if I was disciplined enough.

What I did not know that Sunday afternoon, and what I have come to understand in the four years since, is that the 25x formula is the answer to a question that is much narrower than the question most FIRE pursuers are actually asking. The formula assumes things about your life that are unlikely to be true. The number it produces is, for most people, simultaneously too high and too low in different ways.

I want to walk through what the 25x rule actually says, what it leaves out, and how to think about your real FIRE number — which is, in my experience, harder to pin down but considerably more useful when you do.

## What the 25x Rule Actually Is

The 25x rule comes from the Trinity Study, a 1998 paper by three professors at Trinity University in Texas. They looked at historical stock and bond returns and asked: what's the highest annual withdrawal rate that a retiree could take from their portfolio without running out of money over a 30-year retirement?

Their answer, based on US market data going back to 1926, was approximately 4% per year, adjusted for inflation. If you withdraw 4% of your initial portfolio in year one, then increase that dollar amount by inflation each subsequent year, your portfolio has historically lasted 30 years with very high probability.

The 25x is just the inverse of 4%. If you can safely withdraw 4% per year, you need a portfolio that is 25 times your annual spending.

This is genuinely useful research, but it has assumptions baked in that often get lost in the FIRE community's shorthand version.

## The First Assumption That Breaks: Your Spending Stays the Same

The 25x rule assumes your annual expenses in retirement equal your annual expenses now. For someone retiring at 65, this is roughly true. For someone trying to retire at 45, it is not.

If you retire at 45, you have at least 20 more years before you can claim Social Security. You have, depending on your country, decades before Medicare kicks in. You probably have decades of additional inflation, healthcare costs, and unpredictable major expenses ahead.

For an early retiree, the "annual expenses" number that gets multiplied by 25 has to include:

- Health insurance premiums in the open market, which for a 45-year-old in the US can run $700-1,200/month for marketplace plans
- The full cost of any healthcare events not covered by employer insurance you no longer have
- Long-term provisioning for items like cars (which depreciate and need replacing), home maintenance (which arrives unpredictably), and major life events
- Inflation-adjusted future spending that may legitimately rise as you age

When I added these factors to my "real" annual expense number, the $36,000 I had been multiplying became closer to $52,000. The FIRE target jumped from $900,000 to $1.3 million.

## The Second Assumption That Breaks: The 30-Year Window

The Trinity Study modeled 30-year retirements. If you retire at 65, this is reasonable. If you retire at 45, you might be planning for a 50-year retirement, which is much longer than the data studied.

Research extending the Trinity methodology to longer horizons has shown that the safe withdrawal rate drops as the time horizon extends. For a 50-year retirement, the safe withdrawal rate has historically been closer to 3.3% than 4%, which would imply a 30x multiplier rather than 25x.

For someone with $52,000 in inflation-adjusted annual expenses, this moves the target from $1.3 million (at 25x) to $1.56 million (at 30x).

This isn't a minor adjustment. It's an additional quarter-million dollars of required savings, just from acknowledging that your retirement is longer than the original study modeled.

## The Third Assumption That Breaks: The Sequence of Returns

The 25x rule is a single number. Real markets don't deliver returns in a single number — they deliver returns in a sequence, and the sequence matters enormously.

If you retire at 45 and the market drops 35% in your first two years of retirement, your portfolio is in real trouble. Even if the market eventually recovers, the withdrawals you took during the downturn permanently removed capital that would have compounded during the recovery. This is called "sequence of returns risk," and it's the biggest single threat to an early retirement plan.

The 25x rule doesn't really account for this. It assumes you can ride out bad years by sticking to the plan, but the math is harsher for early retirees because they have more years for a bad sequence to cause permanent damage.

The standard mitigations for sequence risk — a cash buffer of 2-3 years of expenses, a more conservative stock/bond allocation in the years right around retirement, the willingness to cut spending in down years — all reduce sequence risk but also require you to have saved more than the simple 25x number would suggest, because the cash buffer itself has to be sized.

## What "Annual Expenses" Should Actually Include

When I did my real version of the calculation, this was the breakdown I ended up with.

**Current actual annual spending:** $36,000. This was the obvious starting number.

**Add: Health insurance.** I'd lose my employer plan if I retired early. Marketplace coverage for a single person in my state for a decent plan: about $9,600/year. Add to the spending.

**Add: Healthcare out-of-pocket costs not currently captured.** I had been on a low-deductible employer plan that covered most of my routine care. Marketplace plans have higher deductibles and more out-of-pocket exposure. Reasonable estimate: $2,400/year on average across my retirement years.

**Add: Long-term capital expenses amortized.** A car every ten years. A new roof at some point. Major appliances. I averaged these out to about $4,200/year of provisioning.

**Add: Higher discretionary spending in retirement.** This one was psychological. If I retire in my forties, I'm going to want to travel more, do more things, spend more on the activities that fill the time work used to fill. Realistic estimate: another $4,800/year.

**Add: Inflation buffer.** A small buffer for general inflation drift that's hard to predict. I added 10% on top of the total.

The math, summed up: $36,000 base + $9,600 health insurance + $2,400 healthcare out of pocket + $4,200 capex + $4,800 lifestyle + $5,700 inflation buffer = approximately $62,700.

At a 3.5% safe withdrawal rate (slightly more conservative than 4% to account for the longer horizon), the implied FIRE number is about $1.79 million.

That's nearly twice the $900,000 the naive 25x calculation gave me.

## The Number Isn't One Number

The other thing I came to understand is that "the FIRE number" implies a single threshold, beyond which you are free and below which you are not. The reality is more of a spectrum.

There's **Lean FIRE**, where you've saved enough to cover bare-minimum expenses with no margin for error. This might be $700,000 for someone willing to live very modestly.

There's **Coast FIRE**, where you've saved enough that you don't need to add more contributions — existing investments will grow to fund a traditional-age retirement on their own. This is much lower than full FIRE, sometimes as low as $300,000-$500,000 for younger savers.

There's **Regular FIRE**, the 4% rule version, where you can withdraw to support your current lifestyle indefinitely.

There's **Fat FIRE**, where you've saved enough to maintain a comfortable lifestyle with substantial discretionary spending in retirement.

Each of these is a different milestone with different implications. For most pursuing the FIRE concept, the question isn't really "when do I hit the number" but "which version of the number am I optimizing for and why?"

I came to realize my real target wasn't full FIRE at all. My real target was Coast FIRE plus a small additional buffer — enough that I could stop saving aggressively but keep working in some form for another decade or two without financial pressure. That number, for me, is closer to $480,000 than $1.79 million.

The version of the number I needed was much smaller than the version the standard formula was telling me to chase.

## What I'd Tell You

If you're using the 25x rule as your FIRE number, I'd encourage you to do two things.

**First:** Run the calculation with realistic annual expenses, not just current expenses. Add the things you'll need to pay for that your employer is currently covering. Add the long-term costs that don't show up in a typical year. Add a buffer for the things you can't predict. The number that results is going to be larger than the naive calculation, but it will be closer to the actual amount you need.

**Second:** Think carefully about which version of FIRE you're actually pursuing. Are you trying to fully retire and never work again at age 45? That's the expensive version, and it requires a real understanding of sequence risk, healthcare, and inflation. Or are you trying to reach the point where you have the option to stop working, while probably continuing to do work you enjoy in some form? That's a different number — substantially lower and considerably more achievable.

The FIRE community sometimes conflates these versions, with the implication that you should be optimizing for the most demanding one. I now think this is wrong for most people. Most people who pursue FIRE seriously end up doing some form of work into their forties, fifties, and beyond — not because they have to, but because the work is meaningful to them. Optimizing for the version of FIRE that assumes complete cessation of income is overshooting the actual goal.

The number you need is the number that gives you the life you actually want. For most people, that's not the 25x of current expenses. It's something more specific to the version of freedom you're trying to buy.

Run your own math. The 25x rule is a starting point, not an answer.
  `.trim(),
};

export default article;


def buyStock(prices):
  buy_price = prices[0]
  profit = 0

  for p in prices[1:]:
    if buy_price > p:
      buy_price = p
    profit = max(profit,p-buy_price)
  return profit




prices = [7, 1, 5, 3, 6, 4]
ans = buyStock(prices)
print(ans)
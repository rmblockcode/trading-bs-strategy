const boom = require('@hapi/boom');

class EntryService {

  constructor() {

  }

  getDivision(decimals) {
    const division = 10000;
    if (decimals === 2) {
      return 100;
    }
    return division;
  }

  async entryBuyLimitCalculation(pivotPrice, decimals) {
    const division = this.getDivision(decimals);

    const entryPrice1 = parseFloat(pivotPrice) + (5/division);
    const tp1 = entryPrice1 + (25/division);
    const sl1 = entryPrice1 - (40/division);

    const entryPrice2 = entryPrice1 - (10/division);
    const tp2 = entryPrice2 + (50/division);
    const sl2 = entryPrice2 - (40/division);

    // Blacksheep
    const entryPrice3 = entryPrice2 - (10/division);
    const sl3 = entryPrice3 - (40/division);

    return {
      entry1: {
        entryPrice: Number(entryPrice1.toFixed(decimals)),
        tp: Number(tp1.toFixed(decimals)),
        sl: Number(sl1.toFixed(decimals))
      },
      entry2: {
        entryPrice: Number(entryPrice2.toFixed(decimals)),
        tp: Number(tp2.toFixed(decimals)),
        sl: Number(sl2.toFixed(decimals))
      },
      entry3: {
        entryPrice: Number(entryPrice3.toFixed(decimals)),
        sl: Number(sl3.toFixed(decimals))
      }
    }
  }

  async entrySellLimitCalculation(pivotPrice, decimals) {
    const division = this.getDivision(decimals);
    const entryPrice1 = parseFloat(pivotPrice) - (5/division);
    const tp1 = entryPrice1 - (25/division);
    const sl1 = entryPrice1 + (40/division);

    const entryPrice2 = entryPrice1 + (10/division);
    const tp2 = entryPrice2 - (50/division);
    const sl2 = entryPrice2 + (40/division);

    // Blacksheep
    const entryPrice3 = entryPrice2 + (10/division);
    const sl3 = entryPrice3 + (40/division);

    return {
      entry1: {
        entryPrice: Number(entryPrice1.toFixed(decimals)),
        tp: Number(tp1.toFixed(decimals)),
        sl: Number(sl1.toFixed(decimals))
      },
      entry2: {
        entryPrice: Number(entryPrice2.toFixed(decimals)),
        tp: Number(tp2.toFixed(decimals)),
        sl: Number(sl2.toFixed(decimals))
      },
      entry3: {
        entryPrice: Number(entryPrice3.toFixed(decimals)),
        sl: Number(sl3.toFixed(decimals))
      }
    }
  }
}

module.exports = EntryService;

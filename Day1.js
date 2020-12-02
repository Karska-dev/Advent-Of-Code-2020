// classic sum of two

// sort and then two indexes
function sumOfTwo(array, target) {
  let result = [];
  array.sort((a,b) => a - b);
  let start = 0;
  let finish = array.length - 1;
  while (start < finish) {
    let sum = array[start] + array[finish];
    if (sum === target) {
      result.push(array[start]);
      result.push(array[finish]);
      return result;
    } 
    else if (sum < target) start++;
    else finish--;
  }
  return result;
}

function sumOfThree(array, target) {
  let result = [];
  
  let myMap = new Map();
  array.forEach(element => {
    if (!myMap.has(element)) myMap.set(element, true);
  });

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let sum = array[i] + array[j];
      //console.log(sum);
      let third = target - array[i] - array[j];
      //console.log(third);
      if (myMap.has(third)) {
        return [array[i], array[j], target - array[i] - array[j]];
      }
    }
  }

  return result;
}

// get two = [first, second], return product of first * second
function getExpenseReport(array) {
  if (array.length === 0) return 0;
  return array.reduce(((product, element) => product * element), 1);
}

//console.log(getExpenseReport(sumOfTwo([2,3,1,4], 7))); //12
console.log(getExpenseReport(sumOfThree([2,3,1,4], 6)));

let input = [
  1946,
  1859,
  1654,
  1806,
  1648,
  1873,
  1216,
  1831,
  1610,
  1779,
  1626,
  1332,
  1713,
  1919,
  1353,
  1720,
  1818,
  1976,
  1993,
  1617,
  1678,
  1655,
  1725,
  1686,
  1737,
  1696,
  1046,
  1814,
  1909,
  1618,
  2006,
  1903,
  1528,
  1635,
  1457,
  1924,
  1734,
  1723,
  1735,
  1984,
  1846,
  1921,
  1587,
  2009,
  1607,
  1987,
  1910,
  1571,
  1898,
  1869,
  1537,
  1446,
  1535,
  1802,
  1847,
  1966,
  1944,
  1793,
  1383,
  1850,
  1274,
  347,
  1208,
  1748,
  1906,
  1771,
  1849,
  1773,
  1792,
  1705,
  1538,
  1564,
  2003,
  1994,
  1545,
  1704,
  1657,
  1483,
  1701,
  1724,
  1293,
  1834,
  1712,
  1950,
  1844,
  1290,
  1692,
  1820,
  1585,
  1986,
  1328,
  1841,
  1709,
  1232,
  1945,
  1684,
  1787,
  1991,
  1914,
  16,
  1977,
  1620,
  1825,
  1866,
  1615,
  1832,
  496,
  1932,
  1819,
  1559,
  1870,
  1677,
  1650,
  1594,
  1664,
  1600,
  1622,
  1862,
  1937,
  1624,
  1580,
  1931,
  1803,
  1839,
  1755,
  1952,
  1473,
  1694,
  1864,
  1178,
  1163,
  1790,
  393,
  1776,
  1871,
  1999,
  1923,
  1174,
  1557,
  1646,
  1200,
  1842,
  1432,
  1573,
  1913,
  1954,
  1599,
  1980,
  1948,
  1430,
  1298,
  1835,
  1643,
  1742,
  1609,
  1649,
  1382,
  1343,
  1263,
  1908,
  1703,
  1922,
  1764,
  1603,
  1330,
  588,
  954,
  1772,
  1553,
  975,
  1499,
  1552,
  1214,
  1829,
  1698,
  1797,
  1807,
  1961,
  1947,
  1845,
  1881,
  1821,
  1815,
  1623,
  1675,
  1478,
  1886,
  1951,
  1700,
  1890,
  1876,
  1781,
  1853,
  1983,
  1901,
  1939,
  1292,
  853,
  1879,
  1652];

  //console.log(getExpenseReport(sumOfTwo(input, 2020))); // 842016
  console.log(getExpenseReport(sumOfThree(input, 2020)));
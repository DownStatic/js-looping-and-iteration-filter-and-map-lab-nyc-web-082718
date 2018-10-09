// Code your solution here:
function driversWithRevenueOver(drivers, rev){
  return drivers.filter((driver) => {return driver.revenue > rev})
}

function driverNamesWithRevenueOver(drivers, rev){
  fdrivers = driversWithRevenueOver(drivers, rev)
  return fdrivers.map((driver,index,fdrivers) => {return driver.name})
}

function exactMatch(drivers, obj){
  return drivers.filter((driver) => {return driver[Object.keys(obj)[0]] == Object.values(obj)[0]})
}

function exactMatchToList(drivers, obj){
  fdrivers = exactMatch(drivers,obj)
  return fdrivers.map((driver,index,fdrivers) => {return driver.name})
}

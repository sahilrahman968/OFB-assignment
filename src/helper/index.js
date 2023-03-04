export const dayDifference = (date) => {
 const START_MS = new Date(date).getTime();
 const END_MS = new Date().getTime();
 
 if(((END_MS - START_MS)/86400000) >= 1  ){
   const days = parseInt((END_MS - START_MS)/86400000)
   return days === 1 ? `${days} day` : `${days} days`
 }
 else if(((END_MS - START_MS)/3600000) >= 1 ){
  const hours = parseInt((END_MS - START_MS) / 3600000)
  return hours === 1 ? `${hours} hour` : `${hours} hours`
 }

 
}
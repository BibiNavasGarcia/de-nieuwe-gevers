// export const login = async (emailAddress: string) => {
//   const preflight = await fetch('https://denieuwegevers.nl/inloggen', {
//     credentials: 'include',
//     headers: { Cookie: '' }
//   });

//   console.log('preflight = ', preflight);

//   // @ts-ignore
//   const [[, cookies]]: string = [...preflight.headers.entries()].filter(
//     ([header]) => header === 'set-cookie'
//   );

//   console.log('preflight.headers =', preflight.headers);

//   console.log('__RequestVerificationToken = ', cookies);
  
//   // @ts-ignore
//   const [, verificationToken] = cookies.match(/__RequestVerificationToken=(.*?);/);
//   console.log('verificationtoken = ', verificationToken)

//   await fetch('https://denieuwegevers.nl/inloggen', {
//     method: 'POST',
//     body: JSON.stringify({
//       verificationToken,
//       Username: emailAddress
//     }),
//     credentials: 'omit',
//     headers: {
//       'Content-Type': 'text/html; charset=utf-8',
//       Cookie: `__RequestVerificationToken=${verificationToken}`
//     }
//   })
//   console.log('__RequestVerificationToken = ', verificationToken)}

import { useEffect } from "react";

export function usePersistedContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

// useEffect(() => {
//   const fetchBusinesses = () => {
//      return fetch("theURL", {method: "GET"}
//   )
//     .then(res => normalizeResponseErrors(res))
//     .then(res => {
//       return res.json();
//     })
//     .then(rcvdBusinesses => {
//       // some stuff
//     })
//     .catch(err => {
//       // some error handling
//     });
// };
// fetchBusinesses();
// }, []);

export function usePersistedReducer([state, dispatch], key = "state") {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
}

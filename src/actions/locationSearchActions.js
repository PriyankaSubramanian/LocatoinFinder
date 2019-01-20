export const RECEIVED_SEARCH_DATA = 'RECEIVED_SEARCH_DATA'
export const GET_SEARCH_DATA = 'GET_SEARCH_DATA'
export function updateHistory(storeResults) {
  return { 
    type: RECEIVED_SEARCH_DATA, payload: storeResults 
  }
}
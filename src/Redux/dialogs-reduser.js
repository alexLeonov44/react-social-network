let   initialState = {
    dialogsData: [
        { id: 0, name: 'Alex' },
        { id: 1, name: 'Petra' },
        { id: 2, name: 'Vano Pistruchoo' },
        { id: 3, name: 'John Pisos' },
        { id: 4, name: 'boris Britva' },
    ],
    messagesData: [
        { message: 'hey from..' },
        { message: 'real fan..' },
        { message: 'fuck you...' },
        { message: 'real ...' },
        { message: 'fuck you ...' },
    ],
    newMessageText: ''
}
    
    export default function dialogaReduser(state = initialState, action) {
      switch (action.type) {
       
      }
      return state
    }
    
    export const onChangeMessageTextAC = (value) => ({ type: 'ON-CHANGE-MESSAGE-TEXT', payload: value }); // --------->  recieve action obeject yo ui
    export const messageSubmitAC = () => ({ type: 'MESSAGE-SUBMIT' }); // --------->  recieve action obeject yo ui
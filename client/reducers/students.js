const student = (state = {} action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return {
        id: action.id,
        name: action.name,
      }
      default: return state
  }
}
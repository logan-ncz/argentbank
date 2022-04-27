export const selectUserName = (name) => {
    switch (name) {
        case 'firstName' :
            return (state) => state.user.firstName;
        case 'lastName' :
            return (state) => state.user.lastName;
        default:
            return;
    }
}
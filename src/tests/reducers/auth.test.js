import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({uid: action.uid})
});

test('should clear uid for logout', () => {
    const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
    expect(state).toEqual({})
});
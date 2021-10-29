/**
 * O typescript faz a verificação dos tipos, e compara se são iguais,
 *  portanto, não precisamos atribuir o mesmo type para duas variáveis ou objetos
 *    se eles tiverem as mesmas props com os mesmos tipos, isso já vai ser resolvido.
 */

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

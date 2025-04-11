// import { cacheMiddleware } from '../middleware';
// describe('cacheMiddleware', () => {
//   it('should call next when cache is disabled', async () => {
//     const context = {
//       locals: {
//         runtime: {
//           env: {
//             DISABLED_CACHE: true
//           }
//         }
//       },
//       url: {
//         pathname: '/api/test'
//       }
//     };
//     const next = jest.fn();
//     await cacheMiddleware(context, next);
//     expect(next).toHaveBeenCalled();
//   });
//   it('should call next for non-API routes', async () => {
//     const context = {
//       locals: {
//         runtime: {
//           env: {
//             DISABLED_CACHE: false
//           }
//         }
//       },
//       url: {
//         pathname: '/test'
//       }
//     };
//     const next = jest.fn();
//     await cacheMiddleware(context, next);
//     expect(next).toHaveBeenCalled();
//   });
//   it('should call next for auth routes', async () => {
//     const context = {
//       locals: {
//         runtime: {
//           env: {
//             DISABLED_CACHE: false
//           }
//         }
//       },
//       url: {
//         pathname: '/api/v1/auth/login'
//       }
//     };
//     const next = jest.fn();
//     await cacheMiddleware(context, next);
//     expect(next).toHaveBeenCalled();
//   });
// }); 
//# sourceMappingURL=middleware.test.js.map
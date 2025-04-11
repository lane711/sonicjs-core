import { uuid, convertFormDataToObject, getEntryByRoute } from '../utils';

describe('utils', () => {
  describe('uuid', () => {
    it('should generate a valid UUID', () => {
      const id = uuid();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
  });

  describe('convertFormDataToObject', () => {
    it('should convert FormData to object', () => {
      const formData = new FormData();
      formData.append('name', 'John');
      formData.append('age', '30');
      
      const result = convertFormDataToObject(formData);
      expect(result).toEqual({
        name: 'John',
        age: '30'
      });
    });

    it('should handle multiple values for the same key', () => {
      const formData = new FormData();
      formData.append('colors', 'red');
      formData.append('colors', 'blue');
      
      const result = convertFormDataToObject(formData);
      expect(result).toEqual({
        colors: ['red', 'blue']
      });
    });
  });

  describe('getEntryByRoute', () => {
    it('should find entry by route', () => {
      const apiConfig = [
        { route: '/users', name: 'Users' },
        { route: '/posts', name: 'Posts' }
      ];
      
      const result = getEntryByRoute(apiConfig, '/users');
      expect(result).toEqual({ route: '/users', name: 'Users' });
    });

    it('should return undefined for non-existent route', () => {
      const apiConfig = [
        { route: '/users', name: 'Users' }
      ];
      
      const result = getEntryByRoute(apiConfig, '/non-existent');
      expect(result).toBeUndefined();
    });
  });
}); 
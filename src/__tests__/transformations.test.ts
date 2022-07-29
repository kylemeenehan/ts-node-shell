import { basicTransformation } from "../app/transformations";

test('returns data with stringified ids', () => {
   expect(basicTransformation({
       id: 1,
       userId: 2,
       title: 'test',
       completed: false
   })).toEqual({
       id: '1',
       userId: '2'
   })
})

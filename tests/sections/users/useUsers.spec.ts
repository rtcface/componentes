import { useUsers } from "../../../src/sections/users/useUsers"

test('This service return array users', () => { 
	const users = useUsers()
	expect(users).toEqual([{ name: "Javi" }, { name: "Isma" }]);
 })

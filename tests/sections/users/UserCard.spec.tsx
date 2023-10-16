import { render, screen } from "@testing-library/react";
import { UserCard } from "../../../src/sections/users/UserCard";
import { User } from '../../../src/sections/users/useUsers';



test("UserCars component display header", () => {
	const user: User = {
		name: "John Doe",
	};

	render(<UserCard user={user} />);

	const heading = screen.getByText("John Doe");
	expect(heading).toBeInTheDocument();
});


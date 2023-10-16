import { render, screen } from "@testing-library/react";

import { App } from "../src/App";


describe('App component display header', () => { 
	test("App component display header", () => {
		render(<App />);
	
		const heading = screen.getByText(/⚡⚛️ Vite React Best Practices Template \(by Codely\)/i);
	
		expect(heading).toBeInTheDocument();
	});
 })


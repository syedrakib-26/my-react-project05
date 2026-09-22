
Name of the Project:      Technology Hub


Description:              It is a modern, responsive web application built with React, TypeScript, and Tailwind CSS to explore and organize development technologies. It uses reusable component-based architecture with Navbar, Hero, Technology Cards, Stack, Footer, and responsive mobile layouts. Users can explore technologies and add or manage selected technologies in their personal development stack through an interactive interface.

Technology:                React.js, TypeScript, Tailwind CSS, HTML, JSON, React-Toastify, DaisyUI, Vite etc

3 feature:               1. Technology Explorer and Categorize.
                         2. Dynamic Data Loading
                         3. Responsive Design


------------------------------------------------------------------------------------------------------------------------

i. JSX (JavaScript XML) is a syntax that allows us to write HTML-like code inside JavaScript/TypeScript. 
    It makes React components easier to create, read and understand.

ii. Props are used to pass data from a parent component to a child component. 
    State stores data that can change inside a component.

iii. useState is used to store and update changing data in a component. 
    I used it to manage the technology list and selected technology stack.

iv. useEffect is used to perform side effects in React. 
    I used it to fetch the data.json file when the component loads and then store the technology data in state.

v. A unique key helps React identify each item in a list. It allows React to efficiently update only the items that have changed.


vi. Conditional rendering means displaying different UI based on a condition. 

            {selected ? "Added to Stack" : "Add to Stack"}

vii. Data is passed from parent to child using props. To send something back, the parent can pass a callback function to the child, and the child calls that function.

                    interface TechnologyCardProps {
                            tech: Tech;
                            selected: boolean;
                            onAdd: () => void;
                            small?: boolean;
                            }
                            
                    function TechnologyCard({ tech, selected, onAdd }: TechnologyCardProps) {}


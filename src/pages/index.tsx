import { FC } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import Link from "next/link";

const Home: FC = () => {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js example
				</Typography>
				<Link href="/about">
					<Button variant="contained" color="primary">
						{" "}
						Go to About
					</Button>
				</Link>
			</Box>
		</Container>
	);
};

export default Home;

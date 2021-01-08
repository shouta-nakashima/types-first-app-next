import { FC } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import Link from "next/link";

const About: FC = () => {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js About
				</Typography>
				<Link href="/">
					<Button variant="contained" color="primary">
						{" "}
						Go to Home
					</Button>
				</Link>
			</Box>
		</Container>
	);
};

export default About;

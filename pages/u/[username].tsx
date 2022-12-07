import { Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import { DefaultLayout } from '../../components/layout/Layout';

type Props = {};

const Profile = (props: Props) => {
	const router = useRouter();
	const { username } = router.query;

	return (
		<DefaultLayout>
			<Stack direction={"column"} padding={10}></Stack>
		</DefaultLayout>
	);
};

export async function getServerSideProps() {
	const showPage = process.env.NODE_ENV !== "development";

	if (showPage) {
		return {
			notFound: true,
		};
	}

	return {
		props: {},
	};
}

export default Profile;

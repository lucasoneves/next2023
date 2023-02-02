function UserIdPage({id}) {
    return <h1>{id}</h1>
}

export default UserIdPage;

export async function getServerSideProps(context) {
    // Extracting route params
    const { params } = context;
    const userId = params.uid;

    return {
        props: {
            id: 'userId-' + userId
        }
    }

}
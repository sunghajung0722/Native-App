import { Link, router } from "expo-router";
import { Button } from "react-native"



const BackButton = () => {

    // return (
    //     <Link href="/home" onPress={() => { canGoback() }}>Back</Link>
    // )

    <Button title="About" onPress={() => router.push('(about)')} />

}

export default BackButton;

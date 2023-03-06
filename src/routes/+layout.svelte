<script>
    import { signOut, onAuthStateChanged } from 'firebase/auth';
    import { auth } from '../firebaseConfig';
    import { user, isLoggedIn } from '../store';
    import '../app.css';    

    const logout = async () => {
        try {
            await signOut(auth);
            $user = {};
            $isLoggedIn = false;
        } catch (error) {
            console.error(error);
        }
    };
    onAuthStateChanged(auth, authUser => {
        $user = authUser;
        $isLoggedIn = !!authUser; 
    })
</script>

<nav class="bg-neutral-800 p-4 text-white">
    <div class="container m-auto">
        <ul class="flex">
            <li class="mr-6">
                <a href="/" class="text-blue-500 hover:text-blue-800">Home</a>
            </li>        
            {#if $isLoggedIn}
                <li class="mr-6">
                    <a href="/about" class="text-blue-500 hover:text-blue-800">About</a>
                </li>
                <li class="mr-6">
                    <a href="/profile" class="text-blue-500 hover:text-blue-800">Profile</a>
                </li>
                <li class="mr-6">
                    <a href="/" on:click={logout} class="text-blue-500 hover:text-blue-800">Logout</a>
                </li>
            {:else}
                <li class="mr-6">
                    <a href="/login" class="text-blue-500 hover:text-blue-800">Login</a>
                </li>
            {/if}
        </ul>
    </div>
</nav>

<main class="bg-zinc-900 text-white h-screen">
    <div class="container m-auto py-10 h-full flex justify-center items-center">
        <slot><!-- optional fallback --></slot>
    </div>
</main>
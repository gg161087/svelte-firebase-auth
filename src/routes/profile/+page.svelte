<script>
    import { user, isLoggedIn } from '../../store';
</script>

<div class="bg-zinc-700 px-10 py-10 flex flex-col items-center gap-y-4">
    {#if $isLoggedIn}        
        <img src="{$user.photoURL}" alt="{$user.displayName}" class="w-40 h-40 rounded-full m-auto">
        <h3>{$user.displayName}</h3>
        <p>{$user.email}</p>
    {/if}
</div>
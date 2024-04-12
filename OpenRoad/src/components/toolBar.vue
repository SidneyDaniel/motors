<script lang="js">
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';

export default {
  name: 'toolBar',
  components:{
    Menubar, Avatar, InputText, Button
  } 
}

</script>

<template>

<div class="card" style="width: 100%;">
        <Toolbar style="border-radius: 3rem; padding: 0.2rem 1rem 0.2rem 3rem;">
            <template #start>
                <div class="flex align-items-center gap-2" style="display: flex; gap: 1.5rem;">
                    <Avatar image="/src/assets/motorcycles.svg" class="mr-2" size="large" shape="circle" />
                    <Button label="Files" text plain />
                    <Button label="Edit" text plain />
                    <Button label="View" text plain />
                </div>
            </template>

        </Toolbar>
    </div>
</template>
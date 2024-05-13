<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref, nextTick, watch } from "vue";
import type { EssentialLinkProps } from "@/components/EssentialLink.vue";

const $q = useQuasar();

// patter Watch wajib seperti dibawah ini
watch(
  () => $q.screen,
  (newValue, oldValue) => {
    if ($q.screen.width > 1024) {
      nextTick(() => {
        // wajib pakai nextTick biar q-page-container tidak freeze UI (tidak bisa scroll)
        leftDrawerMini.value = true;
        leftDrawerOpen.value = true;
      });
    } else {
      nextTick(() => {
        // wajib pakai nextTick biar q-page-container tidak freeze UI (tidak bisa scroll)
        leftDrawerMini.value = false;
        leftDrawerOpen.value = false;
      });
    }
  },
  {
    deep: true,
  }
);

onMounted(() => {
  if ($q.screen.width > 1024) {
    leftDrawerMini.value = true;
    leftDrawerOpen.value = true;
  } else {
    leftDrawerMini.value = false;
    leftDrawerOpen.value = false;
  }
});

const essentialLinks: EssentialLinkProps[] = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);
const leftDrawerMini = ref(true);

const rightDrawerOpen = ref(false);

function toggleLeftDrawer() {
  if ($q.screen.width > 1024) {
    leftDrawerMini.value = !leftDrawerMini.value;
    // leftDrawerOpen.value = !leftDrawerOpen.value;
    // layoutKey.value = Math.random();
  } else {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
}

const scroll_triggered = ref("bg-top");
function scrollHandler(info) {
  // console.log("scrollHandler", info?.position);
  scroll_triggered.value = info.position >= 60 ? "bg-down" : "bg-top";
}

// const layoutKey = ref(Math.random());
</script>

<template>
  <q-layout view="lHr LpR lfr" @scroll="scrollHandler">
    <q-no-ssr>
      <q-header
        unlevated
        class="row justify-center"
        :class="[$q.screen.width > 768 ? scroll_triggered : '']"
        :style="
          $q.screen.width > 768
            ? scroll_triggered === 'bg-top'
              ? 'border-bottom: solid 1px #ffffff4a;'
              : 'border-bottom: solid 1px #ffffff4a;'
            : ''
        "
      >
        <q-toolbar class="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> 
            Travel & Tour 
          </q-toolbar-title>
          <img style="height:48px;" v-if="$q.screen.width > 768 && scroll_triggered === 'bg-top'" src="assets/images/site-logo.png" />
          <q-space v-if="$q.screen.width > 768 && scroll_triggered === 'bg-top'"></q-space>

          <LayoutHeaderMenu
            v-if="$q.screen.width > 768 && scroll_triggered === 'bg-down'"
          ></LayoutHeaderMenu>

          <q-btn
            flat
            size="lg"
            round
            icon="support_agent"
            aria-label="Menu"
            @click="rightDrawerOpen = !rightDrawerOpen"
          />
        </q-toolbar>
      </q-header>
    </q-no-ssr>


    <q-drawer
      :mini="leftDrawerMini"
      v-model="leftDrawerOpen"
      :behavior="$q.screen.width > 1024 ? 'default' : 'mobile'"
      :show-if-above="false"
      side="left"
      bordered
    >
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      behavior="mobile"
      :show-if-above="false"
      side="right"
      bordered
    >
      <LayoutRightDrawerContent></LayoutRightDrawerContent>
      <q-btn
        class="absolute-top-left q-ma-sm"
        flat
        dense
        round
        icon="close"
        aria-label="Menu"
        @click="rightDrawerOpen = false"
      />

      <!-- <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list> -->
    </q-drawer>

    <q-page-container
      :style="$q.screen.width > 768 ? 'margin-top: -60px' : 'margin-top: 0px'"
    >
      <q-page>
        <!-- <q-card> -->

        <q-card-section
          id="thing_to_stick"
          class="absolute-top bg-redX q-py-none row justify-center"
          style="z-index: 9; margin-top: 60px; padding-left: 0px"
        >
          <q-toolbar class="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
            <!-- <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> Travel & Tour </q-toolbar-title>

          <LayoutHeaderMenu
            v-if="$q.screen.width > 768 && scroll_triggered === 'bg-down'"
          ></LayoutHeaderMenu> -->

            <q-item class="q-pa-none" dense clickable v-ripple>
              <q-item-section avatar>
                <q-avatar size="xl" color="primary" text-color="white" icon="phone" />
              </q-item-section>

              <q-item-section class="text-white">
                <q-item-label class="text-white" caption>For Further Inquires :</q-item-label>
                <q-item-label>+01 (977) 2599 12</q-item-label>
              </q-item-section>
            </q-item>
            <q-space></q-space>
            <LayoutHeaderMenu v-if="$q.screen.width > 768"></LayoutHeaderMenu>
            <q-space></q-space>
            <q-btn style="height:46px;"
                icon="verified"
                dense
                unelevated
                rounded
                class="q-px-lg rounded-borders-4"
                color="form"
                label="PROMO"
              />            
          </q-toolbar>
        </q-card-section>

        <slot />

        <LayoutFooter></LayoutFooter>
        <!-- </q-card> -->
      </q-page>
    </q-page-container>

    <q-footer>
      <div class="bottom-footer text-center text-uppercase">
        Copyright © 2022 Traveler. All rights reserved.
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.bg-top {
  background-color: #3a78c900;
  -webkit-transition: background-color 150ms linear;
  -ms-transition: background-color 150ms linear;
  transition: background-color 150ms linear;
}

.bg-down {
  background-color: #3a78c9;
  -webkit-transition: background-color 150ms linear;
  -ms-transition: background-color 150ms linear;
  transition: background-color 150ms linear;
}

#thing_to_stick {
  /* position: fixed; */
  top: 0;
}

.bottom-footer {
  background-color: #223645;
  padding: 20px 0;
}

</style>

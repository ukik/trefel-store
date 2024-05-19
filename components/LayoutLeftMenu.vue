<template>
  <div>
    <!-- <q-list bordered class="rounded-borders"> -->
    <q-item
      clickable
      v-ripple
      :active="link === 'inbox'"
      @click="link = 'inbox'"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="home" />
      </q-item-section>

      <q-item-section>Home</q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'inbox'"
      @click="link = 'inbox'"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="question_answer" />
      </q-item-section>

      <q-item-section>Konsultasi</q-item-section>
    </q-item>


    <q-expansion-item
      dense
      :content-inset-level="0.5"
      :expand-separator="false"
      icon=""
      label=""
      caption=""
      
    >
      <template v-slot:header>
        <q-item-section avatar style="height:48px;">
          <q-icon name="flight" />
        </q-item-section>

        <q-item-section style="height:48px;"> Tour </q-item-section>
      </template>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Reguler</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Promo</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Tour Guide</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Destinasi</q-item-section>
      </q-item>

    </q-expansion-item>



    <q-expansion-item
      dense
      :content-inset-level="0.5"
      :expand-separator="false"
      icon=""
      label=""
      caption=""
      
    >
      <template v-slot:header>
        <q-item-section avatar style="height:48px;">
          <q-icon color="" name="description" />
        </q-item-section>

        <q-item-section style="height:48px;"> Page </q-item-section>
      </template>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Tentang Kami</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Service</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Karir</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Galeri</q-item-section>
      </q-item>

      <q-expansion-item
        dense
        :content-inset-level="0.5"
        :expand-separator="false"
        icon=""
        label=""
        caption=""
        
      >
        <template v-slot:header>
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section style="height:48px;"> Info </q-item-section>
        </template>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>FAQ</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Term & Condition</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Privacy Policy</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-expansion-item>

    <q-expansion-item
      dense
      :content-inset-level="0.5"
      :expand-separator="false"
      icon=""
      label=""
      caption=""
      
    >
      <template v-slot:header>
        <q-item-section avatar style="height:48px;">
          <q-icon name="local_mall" />
        </q-item-section>

        <q-item-section style="height:48px;"> Produk </q-item-section>
      </template>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Travel</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Rental</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Hotel</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Suvenir</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Kuliner</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section side>
          <q-icon size="xs" name="remove" />
        </q-item-section>

        <q-item-section>Talent</q-item-section>
      </q-item>
    </q-expansion-item>

    <q-expansion-item
      dense
      :content-inset-level="0.5"
      :expand-separator="false"
      icon=""
      label=""
      caption=""
      
    >
      <template v-slot:header>
        <q-item-section avatar style="height:48px;">
          <q-icon name="face" />
        </q-item-section>

        <q-item-section style="height:48px;"> Akun </q-item-section>
      </template>

      <q-expansion-item
        dense
        :content-inset-level="0.5"
        :expand-separator="false"
        icon=""
        label=""
        caption=""
        
      >
        <template v-slot:header>
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section style="height:48px;"> Transaksi </q-item-section>
        </template>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Keranjang</q-item-section>
        </q-item>

        <q-item 
          to="transaction-history"
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Riwayat</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Pembayaran</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Batal</q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        dense
        :content-inset-level="0.5"
        :expand-separator="false"
        icon=""
        label=""
        caption=""
        
      >
        <template v-slot:header>
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section style="height:48px;"> Biodata </q-item-section>
        </template>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Profile</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Alamat</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Perusahaan</q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        dense
        :content-inset-level="0.5"
        :expand-separator="false"
        icon=""
        label=""
        caption=""
        
      >
        <template v-slot:header>
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>
          <q-item-section style="height:48px;"> Partnership </q-item-section>
        </template>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Affiliate</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Member</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
        >
          <q-item-section side>
            <q-icon size="xs" name="remove" />
          </q-item-section>

          <q-item-section>Biro Pemasaran</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-expansion-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'inbox'"
      @click="link = 'inbox'"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="logout" />
      </q-item-section>

      <q-item-section>Logout</q-item-section>
    </q-item>
  </div>
</template>

<script setup>
const link = ref("inbox");
</script>

<template>
  <v-container class="about-us-container">
    <v-row>
      <v-col cols="12">
        <v-card class="about-us-card">
          <v-card-title class="headline">About Us</v-card-title>
          <v-card-text>
            <p class="about-us-text">Our company has been at the forefront of furniture design and manufacturing since 2020. We pride ourselves on creating high-quality, sustainable pieces that bring comfort and style to your home.</p>
            <p class="about-us-text">Our team is made up of skilled artisans and innovative designers that work together to craft unique furniture collections. We believe in the beauty of craftsmanship and the value of durable, timeless designs.</p>
            <p class="about-us-text">As a family-owned business, we value our customers and strive to exceed their expectations with every piece we create. We are committed to excellent customer service and sustainable business practices that respect our planet.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="member in teamMembers" :key="member.name">
        <v-card class="team-member-card">
          <v-img :src="member.photo" class="team-member-image">
            <v-card-title class="team-member-name">{{ member.name }}</v-card-title>
          </v-img>
          <v-card-subtitle class="team-member-position">{{ member.position }}</v-card-subtitle>
          <v-card-text class="team-member-bio">{{ member.bio }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      teamMembers: [
        {
          name: 'Eyad Bahget',
          position: 'Founder & CEO',
          bio: 'Eyad has 20 years old and has more than 3 years of experience in the furniture industry...',
          photo: require('../assets/eyad photo.jpg'), // Use require to import image from assets
        },
        // Add more team members here
      ],
    };
  },
};
</script>

<style scoped>
.about-us-container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  background-color: #f5f5f5;
}

.about-us-card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out;
}

.about-us-card:hover {
  transform: translateY(-5px);
}

.headline {
  color: #5C6BC0;
  font-weight: bold;
}

.about-us-text {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.team-member-card {
  box-shadow: 0px 20px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
}

.team-member-card:hover {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
}

.team-member-image {
  height: 200px;
  position: relative;
}

.team-member-name {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  box-sizing: border-box;
}

.team-member-position {
  color: #5C6BC0;
  font-size: 0.9rem;
  padding: 0.5rem;
}

.team-member-bio {
  padding: 0.5rem;
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
}

/* Add responsiveness to the layout */
@media (max-width: 768px) {
  .team-member-card, .about-us-card {
    margin: 10px;
  }

  .about-us-container {
    padding: 1rem;
  }
}
</style>
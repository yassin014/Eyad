<template>
  <v-container class="contact-us-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="contact-us-card">
          <v-card-title class="headline">Contact The Owner</v-card-title>
          <v-card-text>
            <div class="contact-details">
              <h2>Eyad Bahget</h2>
              <p><strong>Position:</strong> CEO</p>
              <p><strong>Phone Number:</strong> 58673319</p>
              <p><strong>Email:</strong> <a href="mailto:Eyad.Bahgat@Medtech.tn">Eyad.Bahgat@Medtech.tn</a></p>
            </div>
            <v-divider class="my-4"></v-divider>
            <v-form>
              <v-card-title class="headline">Send Message</v-card-title>
              <v-textarea outlined v-model="message" label="Your message" rows="5" class="my-4"></v-textarea>
              <v-btn color="primary" class="send-message-btn">Send</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    sendMessage() {
      // Logic to send the message goes here
      console.log(this.message);
    }
  }
};
</script>

<style scoped>
.contact-us-container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.contact-us-card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}

.headline {
  color: #5C6BC0;
  font-weight: bold;
}

.contact-details h2 {
  color: #5C6BC0;
  margin-bottom: 0.5rem;
}

.contact-details p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.send-message-btn {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contact-us-container {
    padding: 1rem;
  }
}
</style>

<script language="javascript">
function LocalizaIP_done(ip_data) {
  if (ip_data &&!ip_data['error']) {
    const ipAddress = ip_data['ip'];
    const city = ip_data['city'];
    const country = ip_data['country'];
    const latitude = ip_data['latitude'];
    const longitude = ip_data['longitude'];

    console.log(`IP Address: ${ipAddress}`);
    console.log(`Location: ${city}, ${country} (lat: ${latitude}, lon: ${longitude})`);

    // To see who enters your website, you can use the following approaches:
    // 1. Log the IP address and location to your server-side logs
    // 2. Use a analytics tool like Google Analytics to track user behavior
    // 3. Implement a user authentication system to identify users

    // For demonstration purposes, let's log the IP address and location to the console
    console.log(`User entered from: ${city}, ${country} with IP address ${ipAddress}`);
  } else {
    console.error('Error fetching IP data:', ip_data['error']);
  }
}
</script>
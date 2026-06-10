<template>
    <section class="google-map-section">
        <div class="map-column">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A23a6f9b9f043932f82ec7acf2e0dc1702f9cdaebb03a98963cb8a987e0047c71&amp;source=constructor"
                width="100%"
                height="400"
                frameborder="0"
            ></iframe>
            <!-- <div
                    class="google-map"
                    id="contact-google-map"
                    data-map-lat="40.712776"
                    data-map-lng="-74.005974"
                    data-icon-path="assets/images/icons/map-marker.png"
                    data-map-title="Brooklyn, New York, United Kingdom"
                    data-map-zoom="12"
                    data-markers='{
                        "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                    }'
                ></div> -->
        </div>
    </section>
</template>
<script>
export default {
    name: "MapSectionComponent",
};
</script>

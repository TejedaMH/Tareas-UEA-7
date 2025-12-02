const supabaseClient = supabase.createClient("https://imcpvcmxqquhhdfmkwyx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltY3B2Y214cXF1aGhkZm1rd3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTUwODQsImV4cCI6MjA3NzQ5MTA4NH0.RY94No2SGDTg44_W8iDIkQIFwb9q27LxP2W-XB_lWSM",{
            db: {schema: "public"}
        }
    );

(async () => {
    const response = await supabaseClient.from("Tarea 4").
    select("Texto, Numero")
    console.log (response)
    document.getElementById("Peliculas").innerHTML = JSON.stringify(response, null, 2)
    })()
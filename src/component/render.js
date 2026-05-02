
export default async function render({
    components = null,
    id = null,
    type = 'append'
}) {

    try {
      
        if (type === 'append') {
            document.getElementById(id).appendChild(components);
        }
        else {
            document.getElementById(id).replaceWith(components);
        }
    }
    catch (e) {
        console.error("An error occur", e);
    }
}
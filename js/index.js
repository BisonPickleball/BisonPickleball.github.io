document.addEventListener("DOMContentLoaded", () => {
  const clinics = document.getElementById("clinics");
  const loading = document.getElementById("clinics-loading");
  const rows = document.querySelectorAll("tr.data-row");

  // Normalize today to midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const fetches = [];

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    if (cells.length < 1) return;

    // Parse clinic date
    const dateText = cells[0].textContent.trim();
    const clinicDate = new Date(dateText);

    // Remove past clinics
    if (!isNaN(clinicDate) && clinicDate < today) {
      row.remove();
      return;
    }

    const linkCell = row.querySelector("td:last-child a");
    if (!linkCell) return;

    const eventId = row.id;

    // Default
    linkCell.textContent = "Register";

    if (!eventId) return;

    const fetchPromise = fetch(
      `https://secure.pickleballcanada.org/getSpotsRemainingEndPoint.php?eventId=${eventId}`
    )
      .then(response => response.text())
      .then(spotsRemaining => {
        const spots = parseInt(spotsRemaining, 10);

        if (isNaN(spots)) return;

        if (spots <= 0) {
          linkCell.textContent = "Full – Join Waitlist";
          linkCell.classList.add("text-muted");
        } else if (spots < 5) {
          linkCell.textContent = `Register (${spots} spots left)`;
        } else {
          linkCell.textContent = "Register";
        }
      })
      .catch(err => {
        console.warn(`Failed to load spots for event ${eventId}`, err);
      });

    fetches.push(fetchPromise);
  });

  // ✅ Reveal table only after ALL fetches finish
  Promise.allSettled(fetches).then(() => {
    if (loading) loading.remove();
    if (clinics) clinics.style.display = "block";
  });
});
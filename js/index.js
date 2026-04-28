document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("tr.data-row");

  // Normalize "today" to midnight for date-only comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    if (cells.length < 1) return;

    // ✅ Parse clinic date from first column
    const dateText = cells[0].textContent.trim();
    const clinicDate = new Date(dateText);

    // ✅ Remove rows with past dates
    if (!isNaN(clinicDate) && clinicDate < today) {
      row.remove();
      return;
    }

    const linkCell = row.querySelector("td:last-child a");
    if (!linkCell) return;

    const eventId = row.id;

    // ✅ Empty or missing ID → default to Register
    if (!eventId) {
      linkCell.textContent = "Register";
      return;
    }

    fetch(`https://secure.pickleballcanada.org/getSpotsRemainingEndPoint.php?eventId=${eventId}`)
      .then(response => response.text())
      .then(spotsRemaining => {
        const spots = parseInt(spotsRemaining, 10);

        // ✅ Invalid response fallback
        if (isNaN(spots)) {
          linkCell.textContent = "Register";
          return;
        }

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
        linkCell.textContent = "Register";
        console.warn(`Failed to load spots for event ${eventId}`, err);
      });
  });
});
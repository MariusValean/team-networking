fetch("teams.json")
	.then((r) => r.json())
	.then((teams) => {
		console.info("r1", teams);
	});

function displayTeams(teams) {
	const teamsHTML = teams.map(
		(team) => `
    <tr>
        <td>${team.promotion}</td>
        <td>${team.members}</td>
       <td>${team.name}</td>
        <td>${team.url}</td>
    </tr>`
	);
	document.querySelector("#teams tbody").innerHTML = teamsHTML.join("");
	console.info("display", teams);
}

        function generateTeams() {
            const input = document.getElementById('playerInput').value;
            let players = input.split('\n').map(name => name.trim()).filter(name => name !== '');

            const outputDiv = document.getElementById('teamsOutput');
            outputDiv.innerHTML = '';

            if (players.length === 0) {
                outputDiv.innerHTML = '<p style="color:red;">Введите хотя бы одно имя.</p>';
                return;
            }

            // Перемешиваем игроков
            players = shuffleArray(players);

            // Определяем количество команд
            const maxTeamSize = 6;

            // Если игроков достаточно, то команды по 6 человек
            let teams = [];
            if (players.length >= maxTeamSize * 2) {
                let teamCount = Math.floor(players.length / maxTeamSize);
                let remainingPlayers = players.slice(0, teamCount * maxTeamSize);

                for (let i = 0; i < teamCount; i++) {
                    teams.push(remainingPlayers.slice(i * maxTeamSize, (i + 1) * maxTeamSize));
                }
            } else {
                // Иначе делим всех поровну между двумя командами
                const half = Math.ceil(players.length / 2);
                teams.push(players.slice(0, half));
                teams.push(players.slice(half));
            }

            // Выводим команды
            teams.forEach((team, index) => {
                const teamDiv = document.createElement('div');
                teamDiv.className = 'team';
                teamDiv.innerHTML = `<h3>Команда ${index + 1}</h3><ul>${team.map(player => `<li>${player}</li>`).join('')}</ul>`;
                outputDiv.appendChild(teamDiv);
            });
        }

        // Функция случайного перемешивания (алгоритм Фишера–Йетса)
        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        function comeback() {
            window.location.href = "index.html";
        }
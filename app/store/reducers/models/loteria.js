export class Loteria {
    static get Fases() {
        return ['NONE', 'JOINING', 'SETTING_UP', 'PLAYING'];
    };

    static get Fase() {
        return Loteria.Fases.map(v => ({ [v]: v }))
            .reduce((acc, v) => (acc = { ...acc, ...v }));
    }
}
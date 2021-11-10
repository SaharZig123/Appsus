export default {
    props: ['note'],
    template: `
        <div class="note-preview">
            <p v-if="note.info.txt">note: {{note.info.txt}}</p>

        </div>
    `,
}
var app = new Vue({
  el: '#app',
  data: {
  	show: true,
  	showButtons: false,
  	appearAfter0ms: false,
  	appearAfter300ms: false,
  	appearAfter800ms: false,
  	transitionNextQuestion: true,
  	transitionOut: false,
  	answers: {},
  	questionChanged: true,
  	questionIndex: 0,
    questions: [
			'Do you want a Coffee Shop in Bolnore Village?',
			'Would you prefer a small independent coffee business or a large multinational like Starbucks?',
			'Would you consider purchasing coffee from a mobile coffee shop i.e. coffee being served out of a van?',
			'Are you a resident in Bolnore Village?',
			'Any other thoughts?'
    ]
  },
  computed: {
  	currentQuestion () {
  		if (this.questionIndex > -1 && this.questionIndex < this.questions.length) {
	  		return this.questions[this.questionIndex]
  		}
  		return '-'
  	}
  },
  watch: {
  	questionIndex () {
  		// this.transitionNextQuestion = true;
  	}
  },
  methods: {
  	answerQuestion (answer = 1) { 		
  		this.answers[this.questionIndex] = answer
  		tmpQuestionIndex = this.questionIndex + answer
  		this.questionIndex  = -1
  		setTimeout(() => this.questionIndex = tmpQuestionIndex, 800)
  		setTimeout(() => this.showButtons = true, 1200)
  		this.showButtons = false
  		// this.transitionOut = true
  	}
  },
  mounted () {
  	this.appearAfter0ms = true
  	setTimeout(() => this.showButtons = true, 200)
  	setTimeout(() => this.appearAfter300ms = true, 200)
  	setTimeout(() => this.appearAfter800ms = true, 600)
  }
})

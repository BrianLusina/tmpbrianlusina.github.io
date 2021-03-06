---
path:  "/tech/chaos-engineering"
title: Harmony in Chaos Engineering
subtitle: Making chaos work for you at scale
excerpt: Chaos is often depicted as negative and literally means "complete disorder and confusion". What if we can use this complete lack of organization in our production environment to bring stability and confidence in our systems and completely change the meaning of chaos? Let us explore the possible ways in which we can get harmony from chaos engineering.
tags: [Engineering, Chaos, Testing]
category: tech
date: "2019-10-13T12:00:00+00:00"
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image:
 feature: chaos-engineering.jpeg
 teaser: chaos-engineering.jpeg
 thumbnail: chaos-engineering.jpeg
published: true
---

Chaos is often depicted as negative and literally means "complete disorder and confusion". What if we can use this complete lack of organization in our production environment to bring stability and confidence in our systems and completely change the meaning of chaos? Let us explore the possible ways in which we can get harmony from chaos engineering.

So, if chaos is a lack of organization, complete disfunction and confusion & engineering is about precision & using scientific principles to design and build machines, structures, tools and other items. How do these 2 principles exactly come together to bring harmony through chaos engineering?

First of all, let's start with a bit of a history lesson. Chaos engineering was initially thought of by Greg Orzell in 2011 while Netflix was moving to the cloud. His intent was to move from a development model that assumed zero downtimes and breakdowns to  a model where such breakdowns were inevitable. This stemmed from the fact that during development we often assume the best case scenerios where no breakdowns happen or we control how they happen and can immediately fix these issues. However, that is not the case in the real world as we all know breakdowns could happen at any time. His intention was to drive engineers to consider resilience as an obligation rather than an option.

In order to achieve this, Neflix came up with a tool known as  *Chaos Monkey* whose purpose was to randomly choose servers in a production environment and turn them off during business hours. Of course this is a very unpopular opinion and not many would attempt to do this in their production environment that actively serves customers.

> "Imagine a monkey entering a "data center", these "farms" of servers that host all the critical functions of our online activities. The monkey randomly rips cables, destroys devices and returns everything that passes by the hand [i.e. flings excrement]. The challenge for IT managers is to design the information system they are responsible for so that it can work despite these monkeys, which no one ever knows when they arrive and what they will destroy."

In practice this is how chaos engineering can be achieved:

![chaos-engineering-flow](/images/posts/chaos-engineering-flow.png)

The harder it is to disrupt the steady state, the more confident we are the system can withstand random breakdowns. If a weakness is uncovered, we now have a target for improvement before that behavior manifests in the system at large.

## Build  a hypothesis around steady state behaviour

 Focus on the measurable output of a system instead of the internal attributes. By focusing on systemic behavior patterns during experiments, Chaos verifies that the system does work, rather than trying to validate how it works.

## Vary Real world events

Chaos variables reflect real-world events. Prioritize events either by potential impact or estimated frequency. Consider events that correspond to hardware failures like servers dying, software failures like malformed responses, and non-failure events like a spike in traffic or a scaling event. Any event capable of disrupting steady state is a potential variable in a Chaos experiment.

## Run experiments in production

Systems behave differently depending on environment and traffic patterns. Since the behavior of utilization can change at any time, sampling real traffic is the only way to reliably capture the request path. To guarantee both authenticity of the way in which the system is exercised and relevance to the current deployed system, Chaos strongly prefers to experiment directly on production traffic.

## Automate Experiments to run continuously

Running experiments manually is labor-intensive and ultimately unsustainable. Automate experiments and run them continuously. Chaos Engineering builds automation into the system to drive both orchestration and analysis.

## Minimize the blast radius

Experimenting in production has the potential to cause unnecessary customer pain. While there must be an allowance for some short-term negative impact, it is the responsibility and obligation of the Chaos Engineer to ensure the fallout from experiments are minimized and contained.

### Limitations

Despite the buzz and the hype around chaos engineering, there are some drawbacks to it:

1. **Means to an end**.

    It's important to note that it is a *means to an end and not an end in itself* . What matters most is the production service that is provided at the end. Whatever findings that you discover from perform chaos engineering from your system, must be fed back to the system - in terms of fixing bugs, training people - otherwise it will count as a waste of time.

2. **One step forward two steps back**

    Who’s to say that being able to uncover weaknesses will automatically lead to positive outcomes, like improved customer experience? As software developers know, identifying a bug and fixing it are two different challenges. Indeed, your optimization efforts in one area might increase brittleness in other areas.

3. **One among many**

      Chaos Engineering is not a remedy for all of your reliability concerns, and it never will be. It’s merely one of many approaches used to gain confidence in system correctness (typically in the face of perturbation). Consider it required but not sufficient. And by no means is it – or should it be – the only way to learn from failure.

4. **Systems will continue to fail**

      It may sound overly pessimistic, but while Chaos Engineering surely is a net plus, impermanence makes sure that all complex systems will fail no matter how hard we try to avoid it (which is exactly why postmortems are so important). The Holy Grail of Automation – introducing faults automatically instead of manually – won’t change that fact a bit. Don’t fool yourself and set realistic expectations.

5. **No Rollback button**

      The rollback button is a lie. That’s not only true for application deployments but also for fault injection, as both face the same fundamental problem: state. Yes, you might be able to revert the direct impact of non-destructive faults, which can be as simple as stopping to generate CPU/memory/disk load or deleting traffic rules created to simulate network conditions. But no, you can’t roll back what has been inflicted on everything else in the system – the targeted application and everything that interacts with it. A prime example is corrupt or incorrect data stored in a database/queue/cache due to a program crash.

## Conclusion

This is but a brief introduction about chaos engineering, to just showcase that this is a new paradigm and shift into how products are now built at scale and to ensure that the end user always has the best esperience despite the system experiencing heavy storms. I would recommend using chaos engineering as an everyday tool to ensure that whatever you build will always work at scale and work consistently. Of course this is not everyone's cup of tea and that is acceptable. At certain levels of scale, this just becomes a pain to setup and get to work properly. Remember, the ultimate goal is to bring the best experience to the customer and measuer the overal output of your product and not how it works internally.

With that I shall leave you with a quote.

> But behind all the beauty lies madness and chaos.

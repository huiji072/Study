# JPAStudy
자바 ORM 표준 JPA 프로그래밍

코딩할 떄 항상 데이터가 백만개 있다고 가정하고, 자바가 아닌 데이터베이스를 적극 사용하기


정리

일대다 일 때, 항상 '다'인 쪽이 주인

-'다'일 때
@ManyToOne(mappedBy = "[자신의 테이블 명]")

-'일'일 때
@OneToMany
@JoinColumn(name = "")


일대일 일 때

@OneToMany(mappedBy = "[자신의 테이블 명]"

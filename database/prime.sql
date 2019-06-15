use rsa

create table prime
(
    id int not null,
    constraint PK_PRIME primary key (id)
);

insert into prime values(4001);
insert into prime values(4003);
insert into prime values(4007);
insert into prime values(4013);

insert into prime values(4423);
insert into prime values(4441);
insert into prime values(5711);
insert into prime values(5737);

insert into prime values(7577);
insert into prime values(7583);
insert into prime values(7717);
insert into prime values(7879);

insert into prime values(8009);
insert into prime values(8011);
insert into prime values(8017);
insert into prime values(8039);